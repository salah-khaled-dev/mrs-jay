/**
 * Google Apps Script for Divine & Delight Reviews (with Photo Support)
 *
 * HOW TO SET UP (Takes ~1 minute):
 * 1. Open Google Sheets (https://sheets.new) and create a new spreadsheet.
 * 2. Name the first sheet "Reviews".
 * 3. In Row 1, add these headers in the first 8 columns:
 *    A1: ID | B1: Name | C1: Rating | D1: Service | E1: Comment | F1: Date | G1: Approved | H1: Image
 * 4. In Google Sheets menu, click: Extensions (الإضافات) -> Apps Script.
 * 5. Replace all code in the script editor with the code below and click Save (💾).
 * 6. Click "Deploy" (نشر) -> "New deployment" (نشر جديد).
 * 7. Choose type: "Web app" (تطبيق ويب).
 * 8. Set:
 *    - Description: "Divine & Delight Reviews API"
 *    - Execute as: "Me" (أنا)
 *    - Who has access: "Anyone" (أي مستخدم)  <-- IMPORTANT!
 * 9. Click "Deploy", authorize access, and copy the Web App URL (starts with https://script.google.com/macros/s/...).
 * 10. Paste the URL into your .env.local file:
 *     NEXT_PUBLIC_GOOGLE_SHEET_SCRIPT_URL="YOUR_COPIED_URL"
 */

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reviews");
  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  }

  var rows = sheet.getDataRange().getValues();
  var reviews = [];

  // Skip header row (index 0)
  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    // Check if row has an ID and is approved (default true if empty)
    if (row[0]) {
      var isApproved = row[6] === "" || row[6] === true || row[6] === "TRUE";
      if (isApproved) {
        reviews.unshift({
          id: String(row[0]),
          name: String(row[1]),
          rating: Number(row[2]) || 5,
          service: String(row[3]) || "General",
          comment: String(row[4]),
          date: String(row[5]),
          approved: true,
          image: row[7] ? String(row[7]) : undefined
        });
      }
    }
  }

  return ContentService.createTextOutput(JSON.stringify(reviews))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reviews");
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    }

    var data = JSON.parse(e.postData.contents);

    var id = data.id || "rev-" + new Date().getTime();
    var name = data.name || "Anonymous Guest";
    var rating = Number(data.rating) || 5;
    var service = data.service || "General";
    var comment = data.comment || "";
    var date = data.date || Utilities.formatDate(new Date(), "GMT+2", "yyyy-MM-dd");
    var approved = true; // Set to false if you want manual approval in the sheet first!
    var imageUrl = "";

    // Handle user-uploaded photo
    if (data.image) {
      if (data.image.indexOf("data:image") === 0) {
        try {
          var folder;
          var folders = DriveApp.getFoldersByName("Reviews_Images");
          if (folders.hasNext()) {
            folder = folders.next();
          } else {
            folder = DriveApp.createFolder("Reviews_Images");
          }

          var contentType = data.image.substring(5, data.image.indexOf(";"));
          var base64Data = data.image.substring(data.image.indexOf("base64,") + 7);
          var decodedBytes = Utilities.base64Decode(base64Data);
          var fileName = "review-" + id + ".jpg";
          var blob = Utilities.newBlob(decodedBytes, contentType, fileName);
          var file = folder.createFile(blob);

          // Allow anyone with link to view the image
          file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
          imageUrl = "https://lh3.googleusercontent.com/d/" + file.getId();
        } catch (imgErr) {
          // Fallback to storing string if Drive permission is not enabled
          imageUrl = data.image;
        }
      } else {
        imageUrl = data.image;
      }
    }

    // Append new review row (including image column)
    sheet.appendRow([id, name, rating, service, comment, date, approved, imageUrl]);

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Review recorded successfully",
      review: {
        id: id,
        name: name,
        rating: rating,
        service: service,
        comment: comment,
        date: date,
        approved: approved,
        image: imageUrl || undefined
      }
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

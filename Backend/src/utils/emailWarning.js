export const emailWarning = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Urgent Fire Warning</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #ff4500;
            color: white;
            padding: 10px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
        }
        .content {
            background-color: #fff;
            padding: 20px;
            border: 1px solid #ddd;
        }
        .footer {
            background-color: #f1f1f1;
            padding: 10px;
            text-align: center;
            font-size: 12px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="header">
        URGENT: Fire Warning in Your Area
    </div>
    <div class="content">
        <p>Dear Resident,</p>
        <p>This is an urgent notification to inform you that there is a high risk of fire in your area. Please take immediate precautions and be prepared to evacuate if necessary.</p>
        <p><strong>Important details:</strong></p>
        <ul>
            <li>Expected time of fire: [Insert Time/Date]</li>
            <li>Affected areas: [Insert Locations]</li>
            <li>Evacuation centers: [Insert Center Locations]</li>
        </ul>
        <p>Please stay tuned to local news and follow instructions from emergency services.</p>
        <a href="#" class="button">View Evacuation Map</a>
    </div>
    <div class="footer">
        This is an automated message from [Your Organization Name]. For more information, call [Emergency Number].
    </div>
</body>
</html>`;

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>document upload system</title>
    <link rel="stylesheet" href="main.css">
    <script src="https://kit.fontawesome.com/e0491e13dc.js" crossorigin="anonymous"></script>
</head>
<body>
      <div class="wrapper">
          <header>File uploder</header>
          <form action="#">
              <input type="file" class="file-input" name="file" hidden>
              <i class="fas fa-cloud-upload-alt"></i>
              <p>Browse file to upload</p>

          </form>
          <section class="progress-area"></section>
          <section class="uploaded-area"></section>
      </div> 
      <script src="main.js"></script>
</body>
</html>
document.addEventListener('DOMContentLoaded', function() {
  const uploadButton = document.getElementById('uploadButton');
  const message = document.getElementById('message');
  const defenderCodeInput = document.getElementById('defenderCode');
  const selectedFileName = document.getElementById('selectedFileName'); // Reference to the selected file name element
  
  const fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', function() {
    if (fileInput.files.length > 0) {
      selectedFileName.textContent = `Selected File: ${fileInput.files[0].name}`;
    } else {
      selectedFileName.textContent = '';
    }
  });
  
  uploadButton.addEventListener('click', function() {
    const enteredCode = defenderCodeInput.value;
    
    if (fileInput.files.length > 0 && enteredCode === '4444') {
      message.textContent = 'File uploaded successfully.';
      message.style.color = 'green';
    } else {
      message.textContent = 'Upload failed or incorrect defender code.';
      message.style.color = 'red';
    }
  });
});

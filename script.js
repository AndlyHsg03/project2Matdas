function calculateSpeed() {
  // Ambil input pengguna
  const distance = document.getElementById('distance').value;
  const time = document.getElementById('time').value;

  // Validasi input
  if (distance <= 0 || time <= 0) {
      document.getElementById('result').innerHTML = 
          "<span style='color: red;'>Masukkan nilai jarak dan waktu yang valid!</span>";
      document.getElementById('explanation').innerHTML = ""; // Bersihkan penjelasan
      MathJax.typesetClear(); // Bersihkan MathJax yang ada (opsional)
      return;
  }

  // Hitung kecepatan
  const speed = distance / time;

  // Reset elemen sebelum diisi ulang
  document.getElementById('result').innerHTML = "";
  document.getElementById('explanation').innerHTML = "";

  // Tampilkan hasil kecepatan
  document.getElementById('result').innerHTML = `
      <strong>Hasil:</strong> Kecepatan = <strong>${speed.toFixed(2)} m/s</strong>
  `;

  // Tampilkan penjelasan langkah-langkah
  const explanationHTML = `
      <div class="explanation-box">
          <p><strong>Penjelasan:</strong></p>
          <ol>
              <li>
                  Fungsi posisi diberikan sebagai nilai tetap \(s) = ${distance}\ meter 
                  untuk waktu total \(t) = ${time}\ detik.
              </li>
              <li>
                  Kecepatan \(v\) adalah turunan dari fungsi posisi s(t), yaitu:  
                  \[
                  v(t) = ds/dt
                  \]
              </li>
              <li>
                  Karena \s(t)\ tetap selama waktu \(t\), maka v(t) dihitung dengan:  
                  \[
                  v = s/t = (${distance})/(${time})
                  \]
              </li>
              <li>
                  Jadi, kecepatan \(v\) adalah:  
                  \[
                  v = ${speed.toFixed(2)} (m/s)
                  \]
              </li>
          </ol>
      </div>
  `;
  document.getElementById('explanation').innerHTML = explanationHTML;

  // Render ulang MathJax
  MathJax.typeset();
}

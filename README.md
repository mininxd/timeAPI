# TimeAPI

TimeAPI adalah Interface Program untuk waktu dan tanggal, dengan berbasis unix

### Cara mengubah waktu Unix

dalam file /api/index.js terdapat kode<br><br>
**`var unix = Number(response.body) + Number('25200');`<br><br>**
disana tertulis Number('25200');<br>angka apa itu? itu adalah angka untuk GMT+7 atau hasil dari "3600x7"

Bagaimana jika waktu GMT itu - (minus)?<br>
contoh US/Pacific, berada di GMT -8, Kita tinggal hitung "3600x8", lalu mengubah kodenya menjadi pengurangan
<br><br>
**`var unix = Number(response.body) - Number('28800');`**

atau kamu bisa pakai converter GMT ke UNIX disini
https://mininxd.github.io/timeAPI/docs/

**baru**, kamu bisa pakai preset GMT pada tz-data.js

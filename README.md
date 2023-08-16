# TimeAPI 
TimeAPI adalah Interface Program untuk waktu dan tanggal, dengan berbasis unix

[![GitHub tag](https://img.shields.io/github/tag/mininxd/timeAPI?include_prereleases=&sort=semver&color=blue)](https://github.com/mininxd/timeAPI/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](https://github.com/mininxd/timeAPI/blob/main/LICENSE)
[![issues - timeAPI](https://img.shields.io/github/issues/mininxd/timeAPI)](https://github.com/mininxd/timeAPI/issues)
<br>
![maintained - yes](https://img.shields.io/badge/maintained-yes-blue)

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

#### **baru**, kamu bisa pakai preset GMT pada tz-data.js


[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmininxd%2FtimeAPI)

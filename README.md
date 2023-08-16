# TimeAPI

TimeAPI adalah Interface Program untuk waktu dan tanggal, dengan berbasis unix

[![GitHub tag](https://img.shields.io/github/tag/mininxd/timeAPI?include_prereleases=&sort=semver&color=blue)](https://github.com/mininxd/timeAPI/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](https://github.com/mininxd/timeAPI/blob/main/LICENSE)
[![issues - timeAPI](https://img.shields.io/github/issues/mininxd/timeAPI)](https://github.com/mininxd/timeAPI/issues)
<br>
![server date](https://img.shields.io/badge/dynamic/json?label=server+date&query=date&url=https%3A%2F%2Ftimeapi.mininxd.my.id%2F)
![server time](https://img.shields.io/badge/dynamic/json?label=server+time&query=time&url=https%3A%2F%2Ftimeapi.mininxd.my.id%2F)

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

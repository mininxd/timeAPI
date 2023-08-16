# TimeAPI 
TimeAPI adalah Interface Program untuk waktu dan tanggal, dengan berbasis unix



[![GitHub tag](https://img.shields.io/github/tag/mininxd/timeAPI?include_prereleases=&sort=semver&color=blue)](https://github.com/mininxd/timeAPI/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](https://github.com/mininxd/timeAPI/blob/main/LICENSE)
[![issues - timeAPI](https://img.shields.io/github/issues/mininxd/timeAPI)](https://github.com/mininxd/timeAPI/issues)
<br>
![maintained - yes](https://img.shields.io/badge/maintained-yes-blue)
[![endpoint - https://timeapi.mininxd.my.id/](https://img.shields.io/badge/endpoint-https%3A%2F%2Ftimeapi.mininxd.my.id%2F-2ea44f?logo=vercel)](https://timeapi.mininxd.my.id/)

<br>

***API Call:*** <br>
![Waktu Indonesia Barat](https://img.shields.io/badge/dynamic/json?label=Waktu+Indonesia+Barat&query=wib%5B0%5D.time24&url=https%3A%2F%2Ftimeapi.mininxd.my.id)
![Waktu Indonesia Tengah](https://img.shields.io/badge/dynamic/json?label=Waktu+Indonesia+Tengah&query=wita%5B0%5D.time24&url=https%3A%2F%2Ftimeapi.mininxd.my.id)
![Waktu Indonesia Timur](https://img.shields.io/badge/dynamic/json?label=Waktu+Indonesia+Timur&query=wit%5B0%5D.time24&url=https%3A%2F%2Ftimeapi.mininxd.my.id)
<br>

***Deploy TimeAPI pakai Vercel***<br>
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmininxd%2FtimeAPI)


<br>

## Tutorial

### Cara mengubah TimeZone jika kamu deploy ke vercel

dalam file /api/index.js terdapat kode<br>
`var unix = Number(response.body) + Number('GMT7');`<br>
kamu tinggal ubah GMT7nya saja yang sudah disediakan dalam tz-data.js,<br> GMT berapa untuk WIB, WITA, dan WIT?<br>
`GMT7 = WIB` `GMT8 = WITA` `GMT9 = WIT`<br>

**Jika mau kustomisasi angka unix
kamu bisa pakai converter GMT ke UNIX [disini](https://mininxd.github.io/timeAPI/docs/)**
<br>
<br>
### bagaimana jika GMT/Zonawaktu itu GMT- (ada minusnya)?
Tinggal ubah kode ini menjadi pengurangan<br>
`var unix = Number(response.body) - Number('GMT7');`

<br>

<center>
  [![Donate - Saweria](https://img.shields.io/badge/Donate-Saweria-2ea44f?style=for-the-badge)](https://saweria.co/mininxd)
</center>


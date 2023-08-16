# TimeAPI 
TimeAPI adalah Interface Program untuk waktu dan tanggal, dengan berbasis unix

[![GitHub tag](https://img.shields.io/github/tag/mininxd/timeAPI?include_prereleases=&sort=semver&color=blue)](https://github.com/mininxd/timeAPI/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](https://github.com/mininxd/timeAPI/blob/main/LICENSE)
[![issues - timeAPI](https://img.shields.io/github/issues/mininxd/timeAPI)](https://github.com/mininxd/timeAPI/issues)
<br>
![maintained - yes](https://img.shields.io/badge/maintained-yes-blue)

### Cara mengubah TimeZone

dalam file /api/index.js terdapat kode<br>
`var unix = Number(response.body) + Number('GMT7');`<br>
kamu tinggal ubah GMT7nya saja yang sudah disediakan dalam tz-data.js,<br> contoh: <br>
`GMT7 = WIB` `GMT8 = WITA` `GMT9 = WIT`<br>
jika kamu mau kustomisasi angka unix, kamu bisa pakai converter GMT ke UNIX disini
https://mininxd.github.io/timeAPI/docs/
<br>
<br>
### bagaimana jika GMT/Zonawaktu itu GMT - (minus)?
Tinggal ubah kode ini menjadi pengurangan<br>
`var unix = Number(response.body) - Number('GMT7');`

<br>
Deploy TimeAPI pakai Vercel :<br>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmininxd%2FtimeAPI)

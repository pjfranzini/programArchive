distance = (coord1, coord2) ->
  r = 6371
  match1 = /(\d+)°\s*(\d+)′\s*(\d+)″\s*([NS])\,\s*(\d+)°\s*(\d+)′\s*(\d+)″\s*([EW])/.exec coord1
  match2 = /(\d+)°\s*(\d+)′\s*(\d+)″\s*([NS])\,\s*(\d+)°\s*(\d+)′\s*(\d+)″\s*([EW])/.exec coord2
  phi1 = angle(match1[1], match1[2], match1[3], match1[4])
  phi2 = angle(match2[1], match2[2], match2[3], match2[4])
  lambda1 = angle(match1[5], match1[6], match1[7], match1[8])
  lambda2 = angle(match2[5], match2[6], match2[7], match2[8])
  hdr = haversin(phi2-phi1) + Math.cos(phi1) * Math.cos(phi2) * haversin(lambda2-lambda1)
  d = 2 * r * Math.asin(Math.sqrt(hdr))

angle = (deg, min, sec, pole) ->
  deg = parseInt(deg)
  min = parseInt(min)
  sec = parseInt(sec)
  if pole == 'S' or pole == 'W'
    -Math.PI * (deg + min/60.0 + sec/3600.0)/180.0
  else
    Math.PI * (deg + min/60.0 + sec/3600.0)/180.0

haversin = (theta) => (Math.sin(theta/2))*(Math.sin(theta/2))
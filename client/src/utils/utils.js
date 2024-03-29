export const isEmpty = function(element){
  let empty = true
  if(typeof element !== "undefined" && element !== 'null' && element !== null && element !== '' && element !== 'N/A'){
    empty = false
  }
  return empty
}

export const formatDate = function(date){	
  let d = new Date(date)
  let dateString = new Date(d.getTime() - (d.getTimezoneOffset() * 60000 )).toISOString().split(".")[0].replace(/T/g, " ").replace(/-/g, "/")
  return dateString
}

export const roundNumber = function(number, precision = 1000){
  var result = Math.round(number / precision) *  precision
  return result
}

export const setCookie = function(cname, cvalue, hours=12){
  let d = new Date()
  d.setTime(d.getTime() + (hours * 60 * 60 * 1000))
  let expires = "expires=" + d.toGMTString()
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}
export const getCookie = function(cname){
  let name = cname + "="
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ""
}

export const sortList = function(arrayForSort=[], sort_by="", asc=true){
  let list = [...arrayForSort]
  if(list && list.length>0){
    if(sort_by === ""){
      let done = false
      if(asc){
        while (!done) {
          done = true
          for (let i = 1; i < list.length; i += 1) {
              if (list[i - 1] > list[i]){
                  done = false
                  let tmp = list[i - 1]
                  list[i - 1] = list[i]
                  list[i] = tmp
              }
          }
        }
      } else {
        while (!done) {
          done = true
          for (let i = 1; i < list.length; i += 1) {
              if (list[i - 1] < list[i]){
                  done = false
                  let tmp = list[i - 1]
                  list[i - 1] = list[i]
                  list[i] = tmp
              }
          }
        }
      }
    } else {
      let done = false
      if(asc){
        while (!done) {
          done = true
          for (let i = 1; i < list.length; i += 1) {
              if (list[i - 1][sort_by] > list[i][sort_by]){
                  done = false                  
                  let tmp = list[i - 1]
                  list[i - 1] = list[i]
                  list[i] = tmp
              }
          }
        }
      } else {
        while (!done) {
          done = true
          for (let i = 1; i < list.length; i += 1) {
              if (list[i - 1][sort_by] < list[i][sort_by]){
                  done = false
                  let tmp = list[i - 1]
                  list[i - 1] = list[i]
                  list[i] = tmp
              }
          }
        }
      }
    }
  }
  return list
}

export const getWindowDimensions = function(){
  const { innerWidth: width, innerHeight: height } = window
  return {width, height}
}

export const capitalizeFirstLetter = function(string){
  if(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return string
}

export const randomIntFromInterval = function(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const postData = async function (url = "", data = {}) {
  const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
          "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
  })
  return response.json()
}

export const getData = async function (url = "") {
  const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
          "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
  })
  return response.json()
}
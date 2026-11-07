function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Chann Yun International School')
    // This forces the favicon in the browser tab
    .setFaviconUrl('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjR9cK7_BjbUQ4THtiR6iLjRdc3TN7o8kTPD7k91b70ixGvhTAdEYFVOnoN1TlSB2LZEX_PNoBOKDOyYtg94vVlATxh7jpWk6ngIY45Ym4S7RzwvnrEyWDDeGX5DkDqfIDCqmXcOEqjZ0x-9xaWyLZ3XOGWeb-I7mc7s93BDsynlqGNuEBRVY0zfg6akWg/s1111/CYIS%20Png.png')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

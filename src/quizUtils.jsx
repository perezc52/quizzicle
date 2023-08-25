export function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  export function cleanupString(str) {
    return str
          .replaceAll(/&quot;|&#039;|&rsquo;|&apos;|&ldquo;/g, `'`)
          .replaceAll(/&amp;/g, `&`)
          .replaceAll(/&eacute;/gi, `é`)
  }

  // export function findElementsByText(text) {
  //   text = text.toString()
  //   var elements = document.querySelectorAll("*"); // Select all elements
  //   var matchingElements = [];
  
  //   for (var i = 0; i < elements.length; i++) {
  //     if (elements[i].textContent.includes(text)) {
  //       matchingElements.push(elements[i]);
  //     }
  //   }
  
  //   return matchingElements;
  // }
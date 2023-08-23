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
          .replaceAll(/&quot;|&#039;|&rsquo;|&apos;/g, `'`)
          .replaceAll(/&amp;/g, `&`)
          .replaceAll(/&eacute;/gi, `é`)
  }
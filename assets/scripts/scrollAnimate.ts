let sectionTextClass: string;

if (process.client) {
  const sectionText = ref(null);
  const observer = new IntersectionObserver((elements) => {
    elements.forEach((element) => {
      console.log(element);
      if (element.isIntersecting) {
        sectionTextClass = "content-appear";
      } else {
        sectionTextClass = "content-disappear";
      }
    });
  });
  sectionText.forEach((element) => observer.observe(element));
}
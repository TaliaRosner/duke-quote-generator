const quotes = [
    "If you can’t eat it or chase it, nap on it.",
    "I bark like hell at every Amazon delivery. Not all heroes wear capes—some wear fur.",
    "Tal never eats alone—because I’m always there to share her potato chips.",
    "Every squirrel is a lesson in patience and chaos.",
    "Nap like nobody’s watching. Snore like it’s your job.",
    "CSS is like a squirrel. Elusive. Mocking. But you’ll catch it one day.",
    "Tal codes. I supervise. It’s a system that works.",
    "She makes websites. I make eye contact while she eats snacks.",
    "You miss 100% of the treats you don’t beg for.",
    "Sometimes you gotta bark first and ask questions never."
  ];
  
  const generateBtn = document.getElementById("generateBtn");
  const quoteDisplay = document.getElementById("quote");
  

  generateBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${newQuote}"`;
  });
  
  
  
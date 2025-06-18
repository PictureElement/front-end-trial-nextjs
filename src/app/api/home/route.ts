export async function GET() {
  const data = {
    hero: [
      {
        id: 1,
        preheading: "1. Design and order your new kitchen online today",
        heading: "Bespoke & made to measure handmade kitchen design",
        cta: {
          label: "Order Now",
          url: ".",
          openLinkInNewTab: false,
          showIcon: false,
          lucideIconName: "",
        },
        image: {
          alternativeText: "Slide 1",
          width: 1920,
          height: 1080,
          url: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      },
      {
        id: 2,
        preheading: "2. Start your dream kitchen project online today",
        heading: "Custom, handcrafted kitchens tailored to your space",
        cta: {
          label: "Get Started",
          url: "https://msof.me/",
          openLinkInNewTab: true,
          showIcon: true,
          lucideIconName: "external-link",
        },
        image: {
          alternativeText: "Slide 2",
          width: 1920,
          height: 1080,
          url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      }
    ]
  }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    }
  });
}

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
          sameHostLink: true,
          showIcon: false,
          lucideIconComponentName: "",
        },
        image: {
          alternativeText: "Slide 1",
          width: 1920,
          height: 1080,
          url: "https://placehold.co/1920x1080.jpg",
        },
      },
      {
        id: 2,
        preheading: "2. Start your dream kitchen project online today",
        heading: "Custom, handcrafted kitchens tailored to your space",
        cta: {
          label: "Get Started",
          url: ".",
          openLinkInNewTab: false,
          sameHostLink: true,
          showIcon: false,
          lucideIconComponentName: "",
        },
        image: {
          alternativeText: "Slide 2",
          width: 1920,
          height: 1080,
          url: "https://placehold.co/1920x1080.jpg",
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

export async function GET() {
  const data = {
    navbar: {
      leftMenu: [
        {
          id: 1,
          label: "Shop",
          url: ".",
          openLinkInNewTab: false,
          showIcon: false,
          lucideIconName: "",
        },
        {
          id: 2,
          label: "Plan My Kitchen",
          url: ".",
          openLinkInNewTab: false,
          showIcon: false,
          lucideIconName: "",
        }
      ],
      rightMenu: [
        {
          id: 1,
          label: "About Us",
          url: ".",
          openLinkInNewTab: false,
          showIcon: false,
          lucideIconName: "",
        },
        {
          id: 2,
          label: "Gallery",
          url: ".",
          openLinkInNewTab: false,
          showIcon: false,
          lucideIconName: "",
        }
      ],
      cta: {
        id: 1,
        label: "My Order",
        url: ".",
        openLinkInNewTab: false,
        showIcon: true,
        lucideIconName: "shopping-cart",
      }
    },
    siteRepresentation: {
      logo: {
        alternativeText: "MHK Home Kitchens Logo",
        width: 84,
        height: 33,
        url: "https://placehold.co/84x33.svg",
      },
      socialChannels: [
        {
          id: 1,
          label: "MHK Home Kitchens on Facebook",
          name: "Facebook",
          url: ".",
        },
        {
          id: 2,
          label: "MHK Home Kitchens on X",
          name: "X",
          url: ".",
        },
        {
          id: 3,
          label: "MHK Home Kitchens on Instagram",
          name: "Instagram",
          url: ".",
        },
      ]
    },
  }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    }
  });
}

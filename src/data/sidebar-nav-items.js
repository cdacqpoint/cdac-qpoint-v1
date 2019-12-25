export default function() {
  return [
    {
      title: "Questions",
      to: "/questions",
      htmlBefore: '<i class="material-icons">help</i>',
      htmlAfter: ""
    },
    {
      title: "Tags",
      htmlBefore: '<i class="material-icons">style</i>',
      to: "/blog-overview",
    },
    {
      title: "Users",
      htmlBefore: '<i class="material-icons">group</i>',
      to: "/add-new-post",
    },
    {
      title: "Categories",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Unanswered",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/tables",
    }
  ];
}

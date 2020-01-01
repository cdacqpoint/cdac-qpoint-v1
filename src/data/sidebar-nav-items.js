export default function() {
  return [
    {
      title: "Questions",
      to: "/questions",
      htmlBefore: '<i class="material-icons">help</i>',
      htmlAfter: ""
    },
    {
      title: "Ask Question",
      htmlBefore: '<i class="material-icons">forum</i>',
      to: "/add-new-post",
    },
    {
      title: "Course Tags",
      htmlBefore: '<i class="material-icons">style</i>',
      to: "/tags",
    },
    {
      title: "Categories",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    }
  ];
}

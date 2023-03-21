const formatDate = (date) =>
  new Intl.DateTimeFormat("en-EN", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(date)

export default formatDate

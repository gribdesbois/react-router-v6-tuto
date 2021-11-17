export default function Invoice() {
  const params = useParams()
  return <h2>Invoice: {params.invoiceId}</h2>
}

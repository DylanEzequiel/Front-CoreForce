

export const PaymentHistorial = () => {
  const payments = [
    { id: 1, date: '2024-01-01', plan: 'Silver', amount: 29.99 },
    { id: 2, date: '2024-02-01', plan: 'Gold', amount: 49.99 },
    { id: 3, date: '2024-03-01', plan: 'Platinum', amount: 69.99 },
    // Añade más pagos según sea necesario
  ];


  return (
    <div className="container mx-auto">
      <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-center text-5xl text-slate-700 font-semibold mb-6">
        Payment History
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Date
              </th>
              <th className="px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Plan
              </th>
              <th className="px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="px-4 py-2 border-b border-gray-300">
                  {payment.date}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {payment.plan}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  ${payment.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

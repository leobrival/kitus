function MissionReport() {
  const Perforation = () => (
    <div className="flex flex-col justify-between py-2 px-4 gap-4">
      {[...Array(30)].map((_, i) => (
        <div key={i} className="min-h-6 min-w-6 rounded-full bg-stone-300" />
      ))}
    </div>
  );

  return (
    <div className="divide-x aspect-video font-mono flex flex-row mx-auto bg-white shadow-lg relative overflow-hidden">
      <Perforation />
      <div className="px-10 py-8">
        <header className="mb-6">
          <h1 className="text-lg font-bold mb-2"># MISSION REPORT 75X9389</h1>
          <p className="mb-1">
            SUBJECT: ANOMALOUS ENERGY SIGNATURES FROM KERBEROS 5
          </p>
          <p className="mb-1">EARTH DATE: NOV 20, 2057</p>
          <p>MISSION DIRECTOR: E. KERNING</p>
        </header>

        <section className="mb-6">
          <h2 className="font-bold mb-2">## OVERVIEW</h2>
          <p className="mb-4">
            During the exploration of Kerberos 5, our instruments detected
            unexplained energy bursts emanating from the object's polar region.
            These signatures do not match any known natural phenomenon and
            warrant further investigation.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="font-bold mb-2">### OBSERVATIONS</h2>
          <h3 className="font-bold mb-2">Surface Composition Analysis</h3>
          <table className="w-full mb-4 border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Element/Compound</th>
                <th className="text-left p-2">Conc. (ppm)</th>
                <th className="text-left p-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Methane (CH₄)</td>
                <td className="p-2">1450</td>
                <td className="p-2">Higher than anticipated</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Ethane (C₂H₆)</td>
                <td className="p-2">720</td>
                <td className="p-2">Consistent with previous observations</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Complex Organics</td>
                <td className="p-2">350</td>
                <td className="p-2">Potential biological activity</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Water Ice (H₂O)</td>
                <td className="p-2">2100</td>
                <td className="p-2">Abundant, suggesting subsurface ocean</td>
              </tr>
              <tr>
                <td className="p-2">Tholins</td>
                <td className="p-2">1100</td>
                <td className="p-2">Common in Kerberos 5's atmosphere</td>
              </tr>
            </tbody>
          </table>

          <h3 className="font-bold mb-2">Energy Burst Analysis</h3>
          <p>
            a) Frequency: Energy bursts occur at irregular intervals, averaging
            one event every 37.6
          </p>
        </section>
      </div>
      <Perforation />
    </div>
  );
}

export default MissionReport;

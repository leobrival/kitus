function MissionReport() {
  const Perforation = () => (
    <div className="flex flex-col justify-between gap-4 px-4 py-2">
      {[...Array(30)].map((_, i) => (
        <div key={i} className="min-h-6 min-w-6 rounded-full bg-stone-300" />
      ))}
    </div>
  );

  return (
    <div className="relative mx-auto flex aspect-video flex-row divide-x overflow-hidden bg-white font-mono shadow-lg">
      <Perforation />
      <div className="px-10 py-8">
        <header className="mb-6">
          <h1 className="mb-2 text-lg font-bold"># MISSION REPORT 75X9389</h1>
          <p className="mb-1">
            SUBJECT: ANOMALOUS ENERGY SIGNATURES FROM KERBEROS 5
          </p>
          <p className="mb-1">EARTH DATE: NOV 20, 2057</p>
          <p>MISSION DIRECTOR: E. KERNING</p>
        </header>

        <section className="mb-6">
          <h2 className="mb-2 font-bold">## OVERVIEW</h2>
          <p className="mb-4">
            During the exploration of Kerberos 5, our instruments detected
            unexplained energy bursts emanating from the object's polar region.
            These signatures do not match any known natural phenomenon and
            warrant further investigation.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-bold">### OBSERVATIONS</h2>
          <h3 className="mb-2 font-bold">Surface Composition Analysis</h3>
          <table className="mb-4 w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left">Element/Compound</th>
                <th className="p-2 text-left">Conc. (ppm)</th>
                <th className="p-2 text-left">Notes</th>
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

          <h3 className="mb-2 font-bold">Energy Burst Analysis</h3>
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

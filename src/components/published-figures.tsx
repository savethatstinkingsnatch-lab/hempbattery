import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { capacitance, energy } from "@/data/guide";

export function PublishedFigures() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <ChartCard
        kicker="Specific capacitance at 100 A/g"
        title="Still high when the current is brutal"
        note="Farads per gram of active carbon. The 0°C point is not on this chart: at a milder 10 A/g the electrode held 106 F/g. Mixing that point in would make the cold result look weaker than the test it was given."
        data={capacitance}
        dataKey="farads"
        unit="F/g"
      />
      <ChartCard
        kicker="Energy at 20 kW/kg"
        title="Active mass, not the whole device"
        note="Watt-hours per kilogram of active material, at 20, 60, and 100°C. The sealed device — both electrodes, electrolyte, separator — reached about 12 Wh/kg. Use 12, not these bars, if you are comparing with a commercial cell."
        data={energy}
        dataKey="wh"
        unit="Wh/kg"
      />
    </div>
  );
}

function ChartCard({
  kicker,
  title,
  note,
  data,
  dataKey,
  unit,
}: {
  kicker: string;
  title: string;
  note: string;
  data: { temp: string }[];
  dataKey: string;
  unit: string;
}) {
  return (
    <figure className="rounded-card border border-line bg-surface p-4 sm:p-5">
      <figcaption>
        <p className="text-xs font-medium uppercase tracking-wider text-fiber">{kicker}</p>
        <p className="mt-1 font-display text-2xl tracking-tight">{title}</p>
      </figcaption>
      <div className="mt-4 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 4, left: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="var(--color-line)" />
            <XAxis dataKey="temp" tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis
              width={36}
              tick={{ fill: "var(--color-muted)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "color-mix(in oklab, var(--color-fiber) 8%, transparent)" }}
              content={({ active, payload, label }) => {
                if (!active || !payload?.length) return null;
                const value = payload[0]?.value;
                return (
                  <div className="rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink">
                    <p className="text-muted">{label}</p>
                    <p className="font-medium tabular-nums">
                      {value} {unit}
                    </p>
                  </div>
                );
              }}
            />
            <Bar dataKey={dataKey} fill="var(--color-fiber)" radius={[6, 6, 0, 0]} maxBarSize={48} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{note}</p>
    </figure>
  );
}

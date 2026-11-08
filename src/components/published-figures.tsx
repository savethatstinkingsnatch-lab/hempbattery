import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Cited } from "@/components/cited";
import { capacitance, energy } from "@/data/guide";

export function PublishedFigures() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <ChartCard
        kicker="Specific capacitance at 100 A/g"
        title="Still high when the current is brutal"
        note="Farads per gram. The abstract’s 0°C point is not on this chart: at 10 A/g the electrode held 106 F/g. These three bars are the 100 A/g points. [1] [2]"
        data={capacitance}
        dataKey="farads"
        unit="F/g"
      />
      <ChartCard
        kicker="Energy at 20 kW/kg"
        title="Active mass, as the abstract says"
        note="The abstract gives 19, 34, and 40 Wh/kg at 20 kW/kg and says those power-energy figures are normalized to active mass. Separately, it reports 12 Wh/kg for the assembled device and does not say what that kilogram includes. [1] [2] The inventors’ patent describes that device figure as an estimate, not a household pack. [8]"
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
      <p className="mt-3 text-sm leading-relaxed text-muted">
        <Cited text={note} />
      </p>
    </figure>
  );
}

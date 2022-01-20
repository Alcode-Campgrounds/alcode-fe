import { stateData } from "./stateData.js";

export default function States({ setState }) {
  return (
    <select
      className="state-dropdown"
      defaultValue="ALL"
      onChange={setState}
    >
      <option key="ALL" value="ALL">
        ALL
      </option>
      {stateData.map((statePick) => (
        <option key={statePick.abbrev} value={statePick.abbrev}>
          {statePick.state}
        </option>
      ))}
    </select>
  );
}

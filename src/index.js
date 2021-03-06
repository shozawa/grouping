import { shuffle } from "lodash";
import { chunk } from "./tools";
import "./style.sass";

function isWhitespace(text) {
  return /^\s*$/.test(text);
}

function parseCSV(string) {
  return string
    .split("\n")
    .filter((row) => !isWhitespace(row))
    .map((row) => row.split(/,|\t/));
}

function toCSV(matrix) {
  return matrix.map((row) => row.join(",")).join("\n");
}

function group(members, numGroups) {
  const copy = members.slice();
  copy.sort((a, b) => a.relationship.localeCompare(b.relationship));
  return chunk(copy, numGroups);
}

function groupsToCSV(groups) {
  const matrix = groups.flatMap((g, i) =>
    g.map((m) => [`グループ${i + 1}`, m.name])
  );
  return toCSV(matrix);
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("submit");
  const textarea = document.getElementById("input");
  const output = document.getElementById("output");
  const numGroups = document.getElementById("num-groups");

  button.addEventListener("click", () => {
    const csv = parseCSV(textarea.value);

    const members = csv.map((row) => {
      let [name, relationship] = row;
      relationship = relationship || "";
      return { name, relationship };
    });

    const groups = group(shuffle(members), numGroups.value);

    output.value = groupsToCSV(groups);
  });
});

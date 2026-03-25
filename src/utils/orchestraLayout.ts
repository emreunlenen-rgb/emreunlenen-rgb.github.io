/** Şefe en yakın sıra 2 kişi; her sıra biraz genişleyerek arkaya doğru yayılır. */
export function namesToFanRows(names: readonly string[]): string[][] {
  const rows: string[][] = [];
  let idx = 0;
  let rowCap = 2;
  while (idx < names.length) {
    rows.push(names.slice(idx, idx + rowCap));
    idx += rowCap;
    rowCap += 1;
  }
  return rows;
}

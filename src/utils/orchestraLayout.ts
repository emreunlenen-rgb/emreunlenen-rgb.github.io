/** Listede soldan sağa / üstten aşağı ilerleyiş: her sıra en fazla 2 isim (son sırada tek kalabilir). */
export function namesToPairRows(names: readonly string[]): string[][] {
  const rows: string[][] = [];
  for (let i = 0; i < names.length; i += 2) {
    rows.push(names.slice(i, i + 2));
  }
  return rows;
}

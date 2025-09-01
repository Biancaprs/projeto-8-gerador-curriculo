export function clsx(...c: Array<string | false | undefined>) {
  return c.filter(Boolean).join(" ");
}
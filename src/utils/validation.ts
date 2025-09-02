import LinksAdicionais from "../components/LinksAdicionais";

export const MAX_SUMMARY_CHARS = 300;

export function validate(data: any) {
  const errors: any = {};
  if (!data.name) errors.name = "";
  if (!data.email) errors.email = "";
  if (!data.phone) errors.phone = "";
  if (!data.linkedin) errors.linkedin = "";
  if (!data.links) errors.links = "";
  if (!data.summary) errors.summary = "";
  if (data.summary && data.summary.length > MAX_SUMMARY_CHARS)
    errors.summary = `Máximo ${MAX_SUMMARY_CHARS} caracteres`;
  return errors;  
}
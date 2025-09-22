export const MAX_SUMMARY_CHARS = 300;

export function validate(data: any) {
  const errors: any = {};
  if (!data.name?.trim()) {
    errors.name = "Nome é obrigatório";
  } 
  if (!data.email?.trim()) {
    errors.email = "Email é obrigatório";
  }
  if (!data.phone?.trim()) {
    errors.phone = "Telefone é obrigatório";
  }
  if (!data.linkedin) errors.linkedin = "";
  if (!data.links) errors.links = "";
  if (!data.summary) errors.summary = "";
  if (data.summary && data.summary.length > MAX_SUMMARY_CHARS)
    errors.summary = `Máximo ${MAX_SUMMARY_CHARS} caracteres`;
  return errors;
}

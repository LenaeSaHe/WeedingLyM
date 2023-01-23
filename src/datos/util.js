export function getInvitadosNumber(invitado) {
  return (invitado?.boletos ?? 0) + (invitado?.ninos ?? 0);
}

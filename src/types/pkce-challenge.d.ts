declare module 'pkce-challenge' {
  interface PKCEChallenge {
    code_verifier: string;
    code_challenge: string;
  }

  function generate(): PKCEChallenge;
  function verify(code_verifier: string, code_challenge: string): Promise<boolean>;

  export default generate;
  export { verify as verifyChallenge };
}
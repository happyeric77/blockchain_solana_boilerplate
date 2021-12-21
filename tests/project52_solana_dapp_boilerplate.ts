import * as anchor from '@project-serum/anchor';

describe('project52_solana_dapp_boilerplate', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  it('Is initialized!', async () => {
    // Add your test here.
    const program = anchor.workspace.Project52SolanaDappBoilerplate;
    const tx = await program.rpc.initialize();
    console.log("Your transaction signature", tx);
  });
});

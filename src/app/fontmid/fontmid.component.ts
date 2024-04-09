import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fontmid',
  templateUrl: './fontmid.component.html',
  styleUrls: ['./fontmid.component.scss']
})
export class FontmidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  initialtexto = `  Acredite em si mesmo e em seu potencial.
             Encare cada desafio como uma oportunidade para crescer.
              Seja persistente em seus esforços, pois a persistência é a chave do sucesso.
            Mantenha sempre uma atitude positiva, mesmo diante das dificuldades.
            Lembre-se de que todo progresso começa com um pequeno passo.
            Celebre suas conquistas, por menores que sejam.
            Aprenda com seus erros e veja neles uma chance de evoluir.
            Visualize seus objetivos e trabalhe duro para alcançá-los.
            Mantenha o foco no presente e no que você pode fazer agora.`;

expandedtext1 = ` Seja grato pelo que você tem e pela jornada que está percorrendo.
            Transforme cada obstáculo em uma oportunidade de aprendizado.
            Não se compare aos outros, pois cada um tem seu próprio caminho.
            Lembre-se de que a jornada é tão importante quanto o destino.
            Acredite que você é capaz de superar qualquer desafio que surgir.
            Mantenha-se sempre em movimento, mesmo que seja um passo de cada vez.
            Aprenda a ouvir sua intuição e confiar em suas escolhas.
            Cultive relacionamentos positivos que o incentivem a crescer.
            Não tenha medo de falhar, pois é através dos fracassos que você aprende a se superar.
            Seja gentil consigo mesmo e com os outros ao longo do caminho.
            Lembre-se de que cada dia é uma nova chance de.`;

expandedtext2 = `"Acredite que você é digno de alcançar seus sonhos e objetivos.
            Mantenha-se fiel aos seus valores e princípios, mesmo quando enfrentar adversidades.
            Aprenda a se adaptar às mudanças e a encontrar oportunidades nelas.
            Comemore cada pequena vitória ao longo do caminho.
            Crie um ambiente positivo ao seu redor, que o motive a alcançar seus objetivos.
            Não deixe o medo ou a dúvida impedi-lo de seguir em frente.`;

  expanded = false;

toggleExpansion() {
   this.expanded = !this.expanded;
}

}

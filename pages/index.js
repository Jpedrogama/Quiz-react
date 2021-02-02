import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';


const stack = ['https://wa.me/5562981613459', 'https://wa.me/5562981113519', 'https://wa.me/5562982213232'];
var num = 0;

export default function redirect(req, res) {
    if(num<(stack.length-1)){
        num++;
        console.log('ok');
    }else{
        console.log('repeat');
        num=0;
    }
    var temp = stack[num];
    return res.redirect(`${temp}`);
    //return res.json(users);
};

redirect();

/*
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

 //const BackgroundImage = styled.div`  
 // background-image: url(${db.bg});
 // flex: 1;
 // background-size: cover;
 // background-position: center;
 //`;

const QuizContainer = styled.div`
  // CSS para adaptar o quizContainer na pagina
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width:500px){
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <QuizBackground backgroundImage = {db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1> Quiz do João Pedro</h1>
          </Widget.Header>

          <Widget.Content>
            <p> Lorem Ipsum </p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Outros</h1>
            <p>se fuder </p>
          </Widget.Content>
        </Widget>
        <Footer/>

      </QuizContainer>
    <GitHubCorner projectUrl = "https://github.com" />
    </QuizBackground>
    
  )
}

*/

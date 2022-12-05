import react, { useState } from "react";
import './Quiz.css';
import Input from "./components/Input/Input";

const Quiz = () => {
    const [mtk,setMtk] = useState(0);
    const [saintek,setSaintek] = useState(0);
    const [fisika,setFisika] = useState(0);
    const [kimia,setKimia] = useState(0);
    const [biologi,setBiologi] = useState(0);
    const [grade, setGrade] = useState(null);

    const ubahMtk = (e) =>{
        setMtk(e.target.value);
    }

    const ubahSaintek = (e) =>{
        setSaintek(e.target.value);
    }
    const ubahFisika = (e) =>{
        setFisika(e.target.value);
    }

    const ubahKimia = (e) =>{
        setKimia(e.target.value);
    }

    const ubahBiologi = (e) =>{
        setBiologi(e.target.value);
    }

    const hitungRata = () => {
        let a = parseInt(mtk);
        let b = parseInt(saintek);
        let c = parseInt(fisika);
        let d = parseInt(kimia);
        let e = parseInt(biologi);

        let rata = (a + b + c + d + e)/5;
        console.log(rata);
        
        if(rata > 80.1){
            setGrade('A');
        }
        else if(rata>= 72.01 && rata<=80){
            setGrade('AB');
        }
        else if(rata>=64.01 && rata<=72){
            setGrade('B');
        }
        else if(rata>=56.01 && rata<=64){
            setGrade('BC');
        }
        else if(rata>=48.01 && rata<=56){
            setGrade('C');
        }
        else if(rata>=40.01 && rata<=48){
            setGrade('D');
        }
        else if(rata>=0 && rata<=40){
            setGrade('E');
        }


    }

    return(
        <div className="App">
            <div className="Calculator">
                <table>
                    <tr>
                        <td><b>Mapel</b></td>
                        <td><b>Nilai</b></td>
                    </tr>
                    <tr>
                        <td>Matematika</td>
                        <td><Input isi={ubahMtk} /></td>
                    </tr>
                    <tr>
                        <td>Saintek</td>
                        <td><Input isi={ubahSaintek} /></td>
                    </tr>
                    <tr>
                        <td>Fisika</td>
                        <td><Input isi={ubahFisika} /></td>
                    </tr>
                    <tr>
                        <td>Kimia</td>
                        <td><Input isi={ubahKimia} /></td>
                    </tr>
                    <tr>
                        <td>Biologi</td>
                        <td><Input isi={ubahBiologi} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button onClick={hitungRata}>Hitung Rata</button></td>
                    </tr>
                </table>
            </div>
            <div className="Calculator">
                <h1>Your Grade</h1>
                <h1 className="grade">{grade}</h1>
            </div>
        </div>
    );
};

export default Quiz;

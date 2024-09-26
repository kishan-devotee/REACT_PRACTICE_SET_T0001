import { Button, Input } from "antd";
import { useState } from "react";

const Calculator = () => {
  const [calc, setCalc] = useState<string>("");

  const GetCalc = (event: any) => {
    let valueOfPuted: string = event.target.id;
    setCalc(calc + valueOfPuted);
  };

  return (
    <div className="calculator">
      <Input
        type="text"
        placeholder="0"
        value={calc}
        id="inputBox"
        className="calcInp"
      />
      <div>
        <Button
          type="default"
          onClick={() => setCalc("")}
          id="AC"
          danger
          className="operator"
        >
          AC
        </Button>
        <Button
          type="default"
          id="DEL"
          onClick={() => setCalc(calc.substring(0, calc.length - 1))}
          danger
          className="operator"
        >
          DEL
        </Button>
        <Button
          type="default"
          onClick={GetCalc}
          id="%"
          danger
          className="operator"
        >
          %
        </Button>
        <Button
          type="default"
          onClick={GetCalc}
          id="/"
          danger
          className="operator"
        >
          /
        </Button>
      </div>
      <div>
        <Button type="default" onClick={GetCalc} id="7" danger>
          7
        </Button>
        <Button type="default" onClick={GetCalc} id="8" danger>
          8
        </Button>
        <Button type="default" onClick={GetCalc} id="9" danger>
          9
        </Button>
        <Button
          type="default"
          onClick={GetCalc}
          id="*"
          danger
          className="operator"
        >
          *
        </Button>
      </div>
      <div>
        <Button type="default" onClick={GetCalc} id="4" danger>
          4
        </Button>
        <Button type="default" onClick={GetCalc} id="5" danger>
          5
        </Button>
        <Button type="default" onClick={GetCalc} id="6" danger>
          6
        </Button>
        <Button
          type="default"
          onClick={GetCalc}
          id="-"
          danger
          className="operator"
        >
          -
        </Button>
      </div>
      <div>
        <Button type="default" onClick={GetCalc} id="1" danger>
          1
        </Button>
        <Button type="default" onClick={GetCalc} id="2" danger>
          2
        </Button>
        <Button type="default" onClick={GetCalc} id="3" danger>
          3
        </Button>
        <Button
          type="default"
          onClick={GetCalc}
          id="+"
          danger
          className="operator"
        >
          +
        </Button>
      </div>
      <div>
        <Button type="default" onClick={GetCalc} id="00" danger>
          00
        </Button>
        <Button type="default" onClick={GetCalc} id="0" danger>
          0
        </Button>
        <Button type="default" onClick={GetCalc} id="." danger>
          .
        </Button>
        <Button
          type="default"
          onClick={() => setCalc(eval(calc))}
          id="="
          danger
          className="equalBtn"
        >
          =
        </Button>
      </div>
    </div>
  );
};

export default Calculator;

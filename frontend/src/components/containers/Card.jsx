import React from "react";
import { Card } from "semantic-ui-react";

//     header: "+ T1 Adjustment T1 税务调整",
//     description: "",
//     meta: "add $20"
//   },
//   {
//     header: "+ CRA Review Letter 税务局信件",
//     description: "",
//     meta: "add $20"
//   },
//   {
//     header: "Taxation consulting",
//     description: "",
//     meta: "from by case"
//   }
// ];

// const CardPrice = () => <Card.Group items={items} />;

const CardPrice = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <i aria-hidden="true" class="gift huge icon"></i>
        <Card.Header>
          Senior Taxation <br /> 老年人税务
        </Card.Header>
        <br />
        <br />
        <Card.Meta>from $36</Card.Meta>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <i aria-hidden="true" class="graduation cap huge icon"></i>
        <Card.Header>
          International Student <br /> 国际学生
        </Card.Header>
        <br />
        <Card.Meta>from $36</Card.Meta>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <i aria-hidden="true" class="plane huge icon"></i>
        <Card.Header>
          New Immigrants Tax <br /> 新移民税务
        </Card.Header>
        <br />
        <Card.Meta>from $42</Card.Meta>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <i aria-hidden="true" class="user huge icon"></i>
        <Card.Header>
          Other Individuals <br /> 其他个人
        </Card.Header>
        <br />
        <Card.Meta>from $42</Card.Meta>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <i aria-hidden="true" class="heart huge icon"></i>
        <Card.Header>
          Family (couple with kids) <br /> 家庭
        </Card.Header>
        <br />
        <Card.Meta>from $78</Card.Meta>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <i aria-hidden="true" class="home huge icon"></i>
        <Card.Header>
          Rental Income Tax <br /> 出租收入税务
        </Card.Header>
        <br />
        <Card.Meta>add $30 for each property</Card.Meta>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <i aria-hidden="true" class="yen sign huge icon"></i>
        <Card.Header>
          Foreign Income Tax <br /> 海外收入税务
        </Card.Header>
        <br />
        <Card.Meta>add $40</Card.Meta>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <i aria-hidden="true" class="money bill alternate huge icon"></i>
        <Card.Header>
          Self-employers Tax <br /> 自雇税务
        </Card.Header>
        <br />
        <Card.Meta>add $55</Card.Meta>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <i aria-hidden="true" class="phone huge icon"></i>
        <Card.Header>
          CRA Phone call inquiry <br /> 致电税务局
        </Card.Header>
        <br />
        <Card.Meta>contact us</Card.Meta>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <i
          aria-hidden="true"
          class="american sign language interpreting huge icon"
        ></i>
        <Card.Header>
          T1 Adjustment <br /> T1税务调整
        </Card.Header>
        <br />
        <br />
        <Card.Meta>add $20</Card.Meta>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <i aria-hidden="true" class="mail huge icon"></i>
        <Card.Header>
          CRA Review Letter <br /> 税务局信件
        </Card.Header>
        <br />
        <Card.Meta>add $20</Card.Meta>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <i aria-hidden="true" class="question huge icon"></i>
        <Card.Header>
          Taxation consulting <br /> 税务咨询
        </Card.Header>
        <br />
        <Card.Meta>contact us</Card.Meta>
      </Card.Content>
    </Card>
  </Card.Group>
);

export default CardPrice;

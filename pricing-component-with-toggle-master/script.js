let pricePlans = [];

// plan type, monthly cost, annual cost, storage limit, users allowed, send limit (GB)
const availablePlans = [
  ['Basic', 19.99, 199.99, '500 GB', 2, 2],
  ['Professional', 24.99, 249.99, '1 TB', 5, 10],
  ['Master', 39.99, 399.99, '2 TB', 10, 20],
];

class Plan {
  constructor(type, monthlyCost, annualCost, storage, users, send) {
    this.type = type;
    this.cost = {
      monthlyCost: monthlyCost,
      annualCost: annualCost,
    };
    this.storage = storage;
    this.users = users;
    this.send = send;
  }
}

const createPricePlans = () => {
  availablePlans.forEach((plan) => pricePlans.push(new Plan(...plan)));
};

const generateCardHtml = (plan, i) => {
  let buttonColor;
  let cardColor;
  let textColor;

  // Alternate card/ button colours
  if (i % 2 === 0) {
    buttonColor = 'primary-background primary-btn';
    cardColor = 'white-background';
  } else {
    buttonColor = 'white-background white-btn';
    cardColor = 'primary-background primary-card';
    textColor = 'white-text';
  }

  let cardHtml = `
      <div class="card ${cardColor}">
          <div class="card-body"> 
              <ul class="list-group list-group-flush ${textColor}">
                  <li class="list-group-item">
                      <div class="card-type">${plan.type}</div>
                      <h2 class="card-price">$${plan.cost}</h5>
                  </li>
                  <li class="list-group-item">${plan.storage} Storage</li>
                  <li class="list-group-item">${plan.users} Users Allowed</li>
                  <li class="list-group-item">Send up to ${plan.send} GB</li>
                  <li class="list-group-item">
                      <div class="d-grid gap-2">
                          <button type="button" class="btn btn-sm btn-primary ${buttonColor}">
                              LEARN MORE
                          </button>
                      </div>
                  </li>
              </ul>
          </div>
    </div>`;
  return cardHtml;
};

const getCards = (monthly) => {
  let cards = document.getElementById('cards');
  cards.innerHTML = ``;

  pricePlans.forEach((plan, i) => {
    let div = document.createElement('div');
    div.classList.add('col');
    monthly === false
      ? (plan = { ...plan, cost: plan.cost.annualCost })
      : (plan = { ...plan, cost: plan.cost.monthlyCost });
    div.innerHTML = generateCardHtml(plan, i);
    cards.appendChild(div);
  });
};

addEventListener('DOMContentLoaded', () => {
  createPricePlans();
  getCards();

  // Toggle monthly/ annual cost
  document
    .getElementById('flexSwitchCheckChecked')
    .addEventListener('click', (e) => {
      getCards(e.target.checked);
    });
});

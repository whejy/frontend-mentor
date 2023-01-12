let pricePlans = [];

function Plan(type, monthlyCost, annualCost, storage, users, send) {
  this.type = type;
  this.monthlyCost = `$${monthlyCost}`;
  this.annualCost = `$${annualCost}`;
  this.storage = storage;
  this.users = users;
  this.send = send;
}

const createPricePlans = () => {
  return pricePlans.push(
    new Plan('Basic', 19.99, 199.99, '500 GB', 2, 3),
    new Plan('Professional', 24.99, 249.99, '1 TB', 5, 10),
    new Plan('Master', 39.99, 399.99, '2 TB', 10, 20)
  );
};

const generateCardHtml = (plan, i) => {
  let buttonColor;
  let cardColor;
  let textColor;

  if (i % 2 === 0) {
    buttonColor = 'primary-background primary-btn';
    cardColor = 'white-background';
  } else {
    buttonColor = 'white-background white-btn';
    cardColor = 'primary-background primary-card';
    textColor = 'white-text';
  }

  let html = `
    <div class="col">
        <div class="card ${cardColor}" style="width: auto">
            <div class="card-body"> 
                <ul class="list-group list-group-flush ${textColor}">
                    <li class="list-group-item">
                        <div>${plan.type}</div>
                        <h2 class="card-title">${plan.monthlyCost}</h5>
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
        </div>
    </div>`;
  return html;
};

addEventListener('DOMContentLoaded', () => {
  createPricePlans();
  let content = '';
  let cards = document.getElementById('cards');

  pricePlans.forEach((plan, i) => {
    content += generateCardHtml(plan, i);
  });
  cards.innerHTML = content;
});

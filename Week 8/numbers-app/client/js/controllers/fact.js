angular
    .module('FactCtrl', [])
    .controller('FactController', function($scope, FactService) {

        $scope.getMathFact = () => {
            FactService.get({
                type: 'math',
                number: $scope.number,
            }, (response) => {

                $scope.fact = response.text
            })
        }

        $scope.getTriviaFact = () => {
            FactService.get({
                type: 'trivia',
                number: $scope.number,
            }, (response) => {
                $scope.fact = response.text
            })
        }

        $scope.getDateFact = () => {
            FactService.get({
                type: 'date',
                number: $scope.number,
            }, (response) => {
                $scope.fact = response.text
            })
        }

        $scope.getRandomFact = () => {

            let randomFact = (Math.floor(Math.random() * (4 - 1) + 1))

            let rand = (Math.floor(Math.random() * (101 - 1) + 1))

            switch(randomFact) {
                case 1:

                    FactService.get({
                        type: 'math',
                        number: rand,
                    }, (response) => {
                        $scope.fact = response.text
                    })

                break;

                case 2:

                     FactService.get({
                        type: 'trivia',
                        number: rand,
                    }, (response) => {
                        $scope.fact = response.text
                    })

                break;

                case 3:

                    let month = (Math.floor(Math.random() * (13 - 1) + 1))
                    let day = 0;

                    if(month === 2) {
                        
                        day = (Math.floor(Math.random() * (29 - 1) + 1))

                    }
                    else if(month === 1 || month === 3 || month === 5 || month === 7
                        || month === 8 || month === 10 || month === 12){

                        day = (Math.floor(Math.random() * (32 - 1) + 1))
                    }
                    else{
                        day = (Math.floor(Math.random() * (31 - 1) + 1))
                    }

                    let date = month + "/" + day

                     FactService.get({
                        type: 'date',
                        number: date,
                    }, (response) => {
                        $scope.fact = response.text
                    })

                break;

                default:
                break;

            
            }
        
        }

    })
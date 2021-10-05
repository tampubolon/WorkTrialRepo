pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub-cred')
	}

	stages {

		stage('Build') {

			steps {
				sh 'docker build -t mar3tin8/jenkins:${BUILD_NUMBER} .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push mar3tin8/jenkins:${BUILD_NUMBER}'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}

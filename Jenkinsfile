pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = '4948a38a-40ef-4e3b-ab14-6705810317b7'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/officialbhartisharma/react-cicd-learning.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([
                    string(
                        credentialsId: 'netlify-token',
                        variable: 'NETLIFY_AUTH_TOKEN'
                    )
                ]) {
                    sh 'netlify deploy --prod --dir=dist --site=$NETLIFY_SITE_ID'
                }
            }
        }

    }
}
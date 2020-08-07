1. https://github.com/joneconsulting/simple-nodejs.git에서 본인 github 계정으로 코드 복사
2. AWS RDS 서비스 생성 
    - createTable.txt 참조
3. AWS EC2 인스턴스 생성
    - simple-nodejs 프로젝트를 포함하는 EC2 인스턴스 생성 (version 1.0)
    - Port 8080으로 실행
    - RDS와 연동
4. AWS Auto Scaling 생성 (BLUE)
    - 최소 1개, 최대 2개의 인스턴스가 유지될 수 있도록 Auto Scaling 설정
5. AWS Elastic Load Balance 생성
    - 사용자의 요청을 3개의 인스턴스에 분산 시킬 수 있도록 구성 
6. S3에 index.html 페이지를 생성
    - index.html 참조
    - Load Balancer로 이동할 수 있는 링크
------
7. https://github.com/joneconsulting/new-simple-nodejs.git에서 본인 github 계정으로 코드 복사
8. AWS EC2 인스턴스 생성
    - new-simple-nodejs 프로젝트를 포함하는 EC2 인스턴스 생성 (version 2.0)
    - RDS와 연동
9. AWS Auto Scaling 생성 (GREEN)
    - 최소 1개, 최대 2개의 인스턴스가 유지될 수 있도록 Auto Scaling 설정
10. AWS Elastic Load Balance에서 버전 업그레이드
    - Verion 1.0에서 Verion 2.0으로 업그레이드 배포 
    - Port 8090으로 실행


Select         
     *
from MedicineUsage mu      
INNER join Medicine m on mu.medID=m.medId      
inner JOIN Employee e on mu.EmpID=e.EmpID      
inner join tblportalBrand pb on pb.medId = mu.medID  
INNER join tblPortal p on p.PortalId = pb.PortalId 
INNER join tblzone z on z.zoneID = e.ZONEID 
where m.Isactive=1     
and p.PortalName = 'haemat'  


 select * from MedicineUsage where noofpatients = -1
 select * from MedicineUsage where noofpatients = -1
-- select * from Employee where Designation = 'kam'
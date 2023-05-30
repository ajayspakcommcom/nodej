 -- USP_REPORT_1 null, null, null, null, null, null, 'haemat'    
    
CREATE PROCEDURE [dbo].[USP_REPORT_1]      
(      
	@empId int =null,      
	@medId int=null,      
	@hospitalName nvarchar(100)=null,      
	@hospitalCity nvarchar(100)=null,      
	@fromDate datetime=null,      
	@toDate datetime=null,    
 	@portalCode NVARCHAR(100) = NULL      
)      
AS      
    Begin      
    if @fromDate is null     
        begin     
        set @fromDate = '1-Jan-2022'     
        end     
    if @toDate is null     
        begin     
        set @toDate = '31-Dec-2029'     
        end     
      
Select   
      
       e.firstName as Seller, mu.Speciality as Speciality,mu.Indication,mu.OrderDate, m.name as medicineName,mu.DoctorsName,     
 mu.NoOfPatients as noOfPaitents,mu.NoOfVials as noOfVials, mu.HospitalName as hospitalName, mu.HospitalCity as HospitalCity,    
 z.ZoneName as zoneName,  
 -- '-NA-' as zoneName,  
  e.EmpID    
from MedicineUsage mu      
INNER join Medicine m on mu.medID=m.medId      
inner JOIN Employee e on mu.EmpID=e.EmpID      
inner join tblportalBrand pb on pb.medId = mu.medID  
INNER join tblPortal p on p.PortalId = pb.PortalId 
INNER join tblzone z on z.zoneID = e.ZONEID 
where m.Isactive=1     
and p.PortalName = @portalCode  
and (@medId is null or @medId = 0 or mu.medID = @medId)    
 and (mu.EmpID = @empId or @empId is null )    
and OrderDate BETWEEN @fromDate and @toDate      
  
-- USP_REPORT_1 null, null, null, null, null, null, null    
--where (@empId =0 or mu.EmpID=@empId )    
      
--select @fromDate, @toDate   
--Select mu.DoctorsName as Seller, --ramesh bhai      
-- if @potalCode is null     
-- begin    
-- print @empID   
  
-- end    
-- else     
-- begin    
-- Select e.firstName as Seller, mu.Speciality as Speciality,mu.Indication,mu.OrderDate, m.name as medicineName,mu.DoctorsName,     
-- mu.NoOfPatients as noOfPaitents,mu.NoOfVials as noOfVials, mu.HospitalName as hospitalName, mu.HospitalCity as HospitalCity,    
-- z.ZoneName as zoneName  from MedicineUsage mu      
-- left outer join Medicine m on mu.medID=m.medId      
-- --left outer join tblportalBrand pm on pm.medID=m.medId and pm.portalID = 1001    
-- left outer join Employee e on mu.EmpID=e.EmpID      
-- left outer join States s on e.StateID=s.StateID      
-- left outer join Zones z on s.ZoneID=z.ZoneID      
-- where m.Isactive=1     
-- and mu.medID in (29, 30, 31)    
-- -- and  pm.portalID = 1001     
-- -- and mu.medID = @medId or @medId is NULL     
-- -- and mu.EmpID = @empId or @empId is NULL     
-- --and OrderDate BETWEEN @fromDate and @toDate      
-- and (@medId is null or @medId = 0 or mu.medID = @medId)    
-- -- and (@empId is null or @empId = 0 or mu.EmpID = @empId)    
-- and OrderDate BETWEEN @fromDate and @toDate      
-- --where (@empId =0 or mu.EmpID=@empId )    
-- end    
End     
  
  
  